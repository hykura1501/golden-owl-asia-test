const fs = require('fs');

module.exports = {
  async up(queryInterface, Sequelize) {
    const dataRaw = fs.readFileSync("./src/db/data/diem_thi_thpt_2024.csv", 'utf8');

    const dataLines = dataRaw.split('\n');

    const data = dataLines.map((line) => {
      const [number, math, literature, foreignLanguage, physics, chemistry, biology, history, geography, civicEducation, foreignLanguageId] = line.split(',');
      return {
        number,
        math: parseFloat(math) || null,
        literature: parseFloat(literature) || null,
        foreignLanguage: parseFloat(foreignLanguage) || null,
        physics: parseFloat(physics) || null,
        chemistry: parseFloat(chemistry) || null,
        biology: parseFloat(biology) || null,
        history: parseFloat(history) || null,
        geography: parseFloat(geography) || null,
        civicEducation: parseFloat(civicEducation) || null,
        foreignLanguageId: foreignLanguageId || null
      }
    })

    const chunkSize = 10000;
    const transactions = await queryInterface.sequelize.transaction();

    console.log("Plesase wait, Inserting data to database...");
    
    try {
      for (let i = 0; i < data.length; i += chunkSize) {
        const chunk = data.slice(i, i + chunkSize)
        await queryInterface.bulkInsert('scores', chunk, { transaction: transactions });
      }

      await transactions.commit();
    } catch (error) {
      await transactions.rollback();
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('scores', null, {});
  }
};
