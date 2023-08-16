const Tasks = require('../../Model/Task')

module.exports = {

    readData: async (req, res) => {
        try {
            let id = req.decoded.id;
            // console.log(req.decoded)
            const tasks = await Tasks.find({created_by:id})
            return res.status(200).json({ message: "Task list ", tasks })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    },
    createData: async (req, res) => {
        try {
            let {id} = req.decoded
            let {task} = req.body
            if (task) {
                const tasks = await Tasks.create({task,created_by:id})
                return res.status(200).json({ message: "Task successfully created", tasks })
            } else {
                return res.status(400).json({ message: "task is required" })
 
            }
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    },
    updateData: async(req, res) => {
        try {
            const tasks = await Tasks.updateOne(req.params,req.body)
            return res.status(200).json({ message: "Task updated successfully", tasks })

        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    },
    deleteData: async(req, res) => {
        try {
            const tasks = await Tasks.deleteOne(req.params)
            return res.status(200).json({ message: "Task deleted successfully", tasks })

        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    },
}