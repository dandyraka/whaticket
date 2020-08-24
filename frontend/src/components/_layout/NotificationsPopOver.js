import React, { useState, useRef, useCallback, useEffect } from "react";

import { format } from "date-fns";
import openSocket from "socket.io-client";

import Popover from "@material-ui/core/Popover";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import ChatIcon from "@material-ui/icons/Chat";

import TicketListItem from "../TicketListItem";

// import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { i18n } from "../../translate/i18n";

import useTickets from "../../hooks/useTickets";

const useStyles = makeStyles(theme => ({
	tabContainer: {
		overflowY: "auto",
		maxHeight: 350,
		"&::-webkit-scrollbar": {
			width: "8px",
			height: "8px",
		},
		"&::-webkit-scrollbar-thumb": {
			boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)",
			backgroundColor: "#e8e8e8",
		},
	},
	popoverPaper: {
		width: "100%",
		maxWidth: 350,
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(1),
		[theme.breakpoints.down("sm")]: {
			maxWidth: 270,
		},
	},
	noShadow: {
		boxShadow: "none !important",
	},
}));

const NotificationsPopOver = () => {
	const classes = useStyles();

	const history = useHistory();
	const userId = +localStorage.getItem("userId");
	const soundAlert = useRef(new Audio(require("../../assets/sound.mp3")));
	const ticketId = +history.location.pathname.split("/")[2];
	const anchorEl = useRef();
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (!("Notification" in window)) {
			console.log("This browser doesn't support notifications");
		} else {
			Notification.requestPermission();
		}
	}, []);

	useEffect(() => {
		const socket = openSocket(process.env.REACT_APP_BACKEND_URL);
		socket.emit("joinNotification");

		socket.on("appMessage", data => {
			if (data.action === "create") {
				if (
					(ticketId &&
						data.message.ticketId === +ticketId &&
						document.visibilityState === "visible") ||
					(data.ticket.userId !== userId && data.ticket.userId)
				)
					return;
				showDesktopNotification(data);
			}
		});

		return () => {
			socket.disconnect();
		};
	}, [history, ticketId, userId]);

	const { tickets } = useTickets({ status: "open" });

	const showDesktopNotification = ({ message, contact, ticket }) => {
		const options = {
			body: `${message.body} - ${format(new Date(), "HH:mm")}`,
			icon: contact.profilePicUrl,
			tag: ticket.id,
		};
		let notification = new Notification(
			`${i18n.t("tickets.notification.message")} ${contact.name}`,
			options
		);

		notification.onclick = function (event) {
			event.preventDefault(); //
			window.open(`/chat/${ticket.id}`, "_self");
		};

		document.addEventListener("visibilitychange", () => {
			if (document.visibilityState === "visible") {
				notification.close();
			}
		});

		soundAlert.current.play();
	};

	const handleClick = useCallback(() => {
		setIsOpen(!isOpen);
	}, [isOpen, setIsOpen]);

	const handleClickAway = useCallback(() => {
		setIsOpen(false);
	}, [setIsOpen]);

	const handleSelectTicket = (e, ticket) => {
		history.push(`/chat/${ticket.id}`);
		handleClickAway();
	};

	return (
		<>
			<IconButton
				onClick={handleClick}
				buttonRef={anchorEl}
				aria-label="Open Notifications"
				color="inherit"
			>
				<Badge badgeContent={tickets.length} color="secondary">
					<ChatIcon />
				</Badge>
			</IconButton>
			<Popover
				disableScrollLock
				open={isOpen}
				anchorEl={anchorEl.current}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				classes={{ paper: classes.popoverPaper }}
				onClose={handleClickAway}
			>
				<List dense className={classes.tabContainer}>
					{tickets.length === 0 ? (
						<ListItem>
							<ListItemText>
								You haven&apos;t received any messages yet.
							</ListItemText>
						</ListItem>
					) : (
						tickets.map(ticket => (
							<TicketListItem
								key={ticket.id}
								ticket={ticket}
								handleSelectTicket={handleSelectTicket}
							/>
						))
					)}
				</List>
			</Popover>
		</>
	);
};

export default NotificationsPopOver;
