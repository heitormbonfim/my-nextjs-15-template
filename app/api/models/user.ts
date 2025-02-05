import { DataTypes } from "sequelize";
import sequelize from "@/lib/sequelize";

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

(async () => {
  try {
    await User.sync();
    console.log("The table for the User model was synchronized successfully.");
  } catch (error) {
    console.error(
      "An error occurred while synchronizing the User model:",
      error,
    );
  }
})();

export default User;
