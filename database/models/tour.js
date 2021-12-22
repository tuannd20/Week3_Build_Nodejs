const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TourSchema = new Schema(
  {
    title: {
      type: String,
    },
    price: {
      type: String,
    },
    image: {
      type: String,
    },
    time: {
      type: String,
    },
    location: {
      type: String,
    },
  },
  {
    collection: "Tours",
  }
);

// Create the model
const TourModel = mongoose.model("Tours", TourSchema);

for (let i = 0; i < 30; i++) {
  TourModel.create({
    title: "Tour Da Lat " + i + " Combo 2021",
    location: "Da Lat",
    image: "https://stockdep.net/files/images/65601899.jpg",
    time: "2 ngay 1 dem",
    price: "1.500.000",
  });
}

// Export the model
module.exports = TourModel;
