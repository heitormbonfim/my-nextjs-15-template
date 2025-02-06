import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import sequelize from "@/lib/sequelize";

interface UserAttributes
  extends Model<
    InferAttributes<UserAttributes>,
    InferCreationAttributes<UserAttributes>
  > {
  id: number;
  name: string;
}

const User = sequelize.define<UserAttributes>("User", {
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
