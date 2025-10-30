const path = require("path");
const pool = require(path.join(__dirname, '../config/db'));


async function list() {
    const [rows] = await pool.query("SELECT * FROM tasks ORDER BY priority DESC, due_date ASC, is_done ASC");
    return rows;
}


async function detail(id) {
    const [rows] = await pool.query("SELECT * FROM tasks WHERE id = ?", [id]);
    return rows[0] || null;
}


async function insert(task) {
    const sql = `
        INSERT INTO tasks (title, description, priority, due_date, created_at, updated_at)
        VALUES (?, ?, ?, ?, NOW(), NOW())
    `;
    const params = [
        task.title,
        task.description,
        task.priority,
        task.dueDate
    ];
    const [result] = await pool.query(sql, params);


    const [rows] = await pool.query("SELECT * FROM tasks WHERE id = ?", [result.insertId]);
    return rows[0];
}

async function update(id, task) {
    const sql = `
        UPDATE tasks
        SET
            title = ?,
            description = ?,
            priority = ?,
            due_date = ?,
            updated_at = NOW()
        WHERE id = ?
    `;
    const params = [
        task.title,
        task.description,
        task.priority,
        task.dueDate,
        id
    ];
    await pool.query(sql, params);


    const [rows] = await pool.query("SELECT * FROM tasks WHERE id = ?", [id]);
    return rows[0];
}


async function remove(id) {
    const sql = "DELETE FROM tasks WHERE id = ?";
    const [result] = await pool.query(sql, [id]);
    return { affectedRows: result.affectedRows };
}

async function updateDone(id, is_done) {
    const sql = `
        UPDATE tasks
        SET is_done = ?, updated_at = NOW()
        WHERE id = ?
    `;
    await pool.query(sql, [is_done, id]);

    const [rows] = await pool.query("SELECT * FROM tasks WHERE id = ?", [id]);
    return rows[0];
}

module.exports = { list, detail, insert, update, remove, updateDone };
