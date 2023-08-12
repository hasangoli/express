const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Bootcamp = require('./models/Bootcamp');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to our database
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Read the json files
const bootcamps = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8')
);

// Import into db
const importData = async () => {
  try {
    await Bootcamp.create(bootcamps);

    console.log('Data imported...');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

// Delete data from db
const deleteData = async () => {
  try {
    await Bootcamp.deleteMany();

    console.log('Data destroyed...');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}
