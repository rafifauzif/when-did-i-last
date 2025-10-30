const path = require('path');
const tasks = require(path.join(__dirname, '../models/models'));

exports.getList = async (req, res) => {
    try {
        const data = await tasks.list();
        return res.json(data);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
};

exports.getDetail = async (req, res) => {
    try {
        const data = await tasks.detail(req.params.id);
        if(!data) return res.status(404).json({message: 'No SUCH tasks found'});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
};

exports.create = async (req, res) => {
    try {
        const body = req.body;
        const payload = {
            title: body.title,
            description: body.description,
            priority: body.priority,
            dueDate: body.dueDate
        }
        const info = await tasks.insert(payload);
        res.status(201).json({message: 'Task Added Successfully', ...info});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
};

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const before = await tasks.detail(id);
        if (!before) return res.status(404).json({message: 'No SUCH tasks found'});

        const body = req.body;
        const payload = {
            title: body.title,
            description: body.description,
            priority: body.priority,
            dueDate: body.dueDate
        }
        const info = await tasks.update(id, payload);
        res.status(201).json({message: 'Task Updated Successfully', ...info});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
};

exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const info = await tasks.detail(id);
        res.status(201).json({message: 'Task Deleted Successfully', ...info});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
};