const db = require('../db/models');
const { Op, where } = require('sequelize');

const subjects = [
	"math",
	"literature",
	"foreignLanguage",
	"physics",
	"chemistry",
	"biology",
	"history",
	"geography",
	"civicEducation"
];

class ScoreController {

	async HelloWorld(req, res) {
		return res.status(200).json({ code: 200, message: "Hello World" });
	}

	async checkScore(req, res) {
		const { number } = req.params;
		const score = await db.scores.findOne({ where: { number } });
		if (!score) {
			return res.status(404).json({ code: 404, message: `${number} is invalid number registration` });
		}
		return res.status(200).json({ code: 200, score: score });
	}

	async getStatistics(req, res) {
		const { subject } = req.params;
		if (!subjects.includes(subject)) {
			return res.status(400).json({
				code: 400,
				message: `${subject} is invalid subject, subject must be in (math, literature, foreignLanguage, physics, chemistry, biology, history, geography, civicEducation)`
			});
		}

		const excellent = await db.scores.count({
			where: {
				[Op.and]: [
					{ [subject]: { [Op.gte]: 8 } },
					{ [subject]: { [Op.ne]: null } }
				]
			}
		});

		const good = await db.scores.count({
			where: {
				[Op.and]: [
					{ [subject]: { [Op.gte]: 6 } },
					{ [subject]: { [Op.lt]: 8 } },
					{ [subject]: { [Op.ne]: null } }
				]
			}
		});

		const medium = await db.scores.count({
			where: {
				[Op.and]: [
					{ [subject]: { [Op.gte]: 4 } },
					{ [subject]: { [Op.lt]: 6 } },
					{ [subject]: { [Op.ne]: null } }
				]
			}
		});

		const bad = await db.scores.count({
			where: {
				[Op.and]: [
					{ [subject]: { [Op.lt]: 4 } },
					{ [subject]: { [Op.ne]: null } }
				]
			}
		});

		const statistics = [
			{
				type: "Bad",
				Quantity: bad
			},
			{
				type: "Medium",
				Quantity: medium
			},
			{
				type: "Good",
				Quantity: good
			},
			{
				type: "Excellent",
				Quantity: excellent
			}
		]

		return res.status(200).json({ code: 200, statistics: statistics, subject: subject });
	}

	async getTopStudents(req, res) {
		const topStudents = await db.scores.findAll({
			attributes: ['number', 'math', 'literature', 'foreignLanguage', 'physics', 'chemistry', 'biology', 'history', 'geography', 'civicEducation', [db.sequelize.literal('(math + physics + chemistry)'), 'total_score']],
			order: [
				['total_score', 'DESC']
			],
			where: {
				[Op.and]: [
					{ math: { [Op.ne]: null } },
					{ physics: { [Op.ne]: null } },
					{ chemistry: { [Op.ne]: null } }
				]
			},
			limit: 10
		})

		return res.status(200).json({ code: 200, topStudents: topStudents });
	}

}

module.exports = new ScoreController();