import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
    min: 0,
  },
  lastModified: {
    type: Date,
    required: false,
    default: new Date(),
  },
});

const studentModel = mongoose.model('students', studentSchema);

studentModel.schema.path('value').validate((v) => {
  return v > 0;
}, 'Grade value cannot be less than zero');

export default studentModel;
