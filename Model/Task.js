const { default: mongoose } = require('mongoose');
const mangoose = require('mongoose')
const TaskSchema = new mangoose.Schema({
    task: {
        type: String,
        require: true
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    }
});
const Tasks = mangoose.model("tasks", TaskSchema);

module.exports = Tasks;