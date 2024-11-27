const WeekMenu = require("../models/WeekMenu");
const moment = require("moment");

const MenuController = {
    async showMenu(req, res) {
        try {
            const semanaActual = `Semana ${moment().isoWeek()} - ${moment().year()}`;
            const menu = await WeekMenu.findOne({ semana: semanaActual });
            if (!menu) {
                return res.status(404).send({ message: "Menu not found" });
            }
            res.status(200).json(menu);
        } catch (error) {
            console.error("There is an error trying to get the menu", error);
            res.status(500).send({ message: "There is an error trying to get the menu" });
        }
    },
    async createOrUpdateMenu(req, res) {
        try {
          const semanaActual = `Semana ${moment().isoWeek()} - ${moment().year()}`;
          const { dias } = req.body;
      
          if (!dias || !Array.isArray(dias) || dias.length !== 7) {
            return res.status(400).json({ message: "The menu most have at least 1 meal per day every day" });
          }
      
          for (const dia of dias) {
            if (!dia.desayuno && !dia.almuerzo && !dia.cena) {
              return res.status(400).json({ 
                message: `The day ${dia.dia} most have at least one meal` 
              });
            }
          }
          const menu = await WeekMenu.findOneAndUpdate(
            { semana: semanaActual },
            { semana: semanaActual, dias },
            { new: true, upsert: true }
          );
      
          res.status(201).json(menu);
        } catch (error) {
          console.error("Error updating or creating the menu", error);
          res.status(500).json({ message: "Error creating or updating the menu" });
        }
      },      
    async resetMenu(req, res) {
        try {
            const semanaActual = `Semana ${moment().isoWeek()} - ${moment().year()}`;
            const resetMenu = await WeekMenu.findOneAndUpdate(
                { semana: semanaActual }, 
                { dias: [] }, 
                { new: true } 
            );

            if (!resetMenu) {
                return res.status(404).send({ message: "There is not a menu for this week" });
            }

            res.status(200).json({ message: "Menu reseted", resetMenu });
        } catch (error) {
            console.error("Error restarting the menu:", error);
            res.status(500).send({ message: "Error restarting the menu" });
        }
    }
};

module.exports = MenuController;