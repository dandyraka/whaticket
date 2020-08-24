"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Tickets",
			[
				{
					status: "pending",
					lastMessage: "hello!",
					contactId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: "pending",
					lastMessage: "hello!",
					contactId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: "pending",
					lastMessage: "hello!",
					contactId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: "pending",
					lastMessage: "hello!",
					contactId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: "pending",
					lastMessage: "hello!",
					contactId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: "pending",
					lastMessage: "hello!",
					contactId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: "pending",
					lastMessage: "hello!",
					contactId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: "pending",
					lastMessage: "hello!",
					contactId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: "pending",
					lastMessage: "hello!",
					contactId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: "pending",
					lastMessage: "hello!",
					contactId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: "pending",
					lastMessage: "hello!",
					contactId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: "pending",
					lastMessage: "hello!",
					contactId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: "pending",
					lastMessage: "hello!",
					contactId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: "pending",
					lastMessage: "hello!",
					contactId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: "pending",
					lastMessage: "hello!",
					contactId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: "pending",
					lastMessage: "hello!",
					contactId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: "pending",
					lastMessage: "hello!",
					contactId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: "pending",
					lastMessage: "hello!",
					contactId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: "pending",
					lastMessage: "hello!",
					contactId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: "pending",
					lastMessage: "hello!",
					contactId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: "pending",
					lastMessage: "hello!",
					contactId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: "pending",
					lastMessage: "hello!",
					contactId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: "pending",
					lastMessage: "hello!",
					contactId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: "pending",
					lastMessage: "hello!",
					contactId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: "pending",
					lastMessage: "hello!",
					contactId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: "pending",
					lastMessage: "hello!",
					contactId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: "pending",
					lastMessage: "hello!",
					contactId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: "pending",
					lastMessage: "hello!",
					contactId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: "pending",
					lastMessage: "hello!",
					contactId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: "pending",
					lastMessage: "hello!",
					contactId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: "pending",
					lastMessage: "hello!",
					contactId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: "pending",
					lastMessage: "hello!",
					contactId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: "pending",
					lastMessage: "hello!",
					contactId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: "pending",
					lastMessage: "hello!",
					contactId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: "pending",
					lastMessage: "hello!",
					contactId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Tickets", null, {});
	},
};
