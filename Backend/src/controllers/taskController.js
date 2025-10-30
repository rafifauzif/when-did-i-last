const path = require('path');
const tasks = require(path.join(__dirname, '../models/models'));

exports.getList = async (req, res) => {
    try {
        const data = await tasks.list();
        return res.json(data);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};

exports.getDetail = async (req, res) => {
    try {
        const data = await tasks.detail(req.params.id);
        if (!data) {
            return res.status(404).json({ message: 'No such task found' });
        }
        res.json(data);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};


exports.create = async (req, res) => {
    try {
        const { title, description, priority, dueDate } = req.body;
        const payload = { title, description, priority, dueDate };

        const info = await tasks.insert(payload);
        res.status(201).json({ message: 'Task added successfully', data: info });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};


exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const before = await tasks.detail(id);
        if (!before) {
            return res.status(404).json({ message: 'No such task found' });
        }

        const { title, description, priority, dueDate } = req.body;
        const payload = { title, description, priority, dueDate };

        const info = await tasks.update(id, payload);
        res.status(200).json({ message: 'Task updated successfully', data: info });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};


exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await tasks.remove(id);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'No such task found' });
        }

        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};

exports.toggleDone = async (req, res) => {
    try {
        const { id } = req.params;
        const { is_done } = req.body; // 0 atau 1

        const before = await tasks.detail(id);
        if (!before) return res.status(404).json({ message: 'Task not found' });

        const updated = await tasks.updateDone(id, is_done);
        res.status(200).json({ message: 'Task status updated', data: updated });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};
