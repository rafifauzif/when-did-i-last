const path = require("path");
const pool = require(path.join(__dirname, '../config/db'));

async function list(){
    const [rows] = await pool.query("SELECT * FROM tasks ORDER BY id DESC");
    return rows;
}

async function detail(id){
    const [rows] = await pool.query("SELECT * FROM tasks WHERE id = ?", [id]);
    return rows[0] || null;
}

async function insert(task){
    const sql = 'CALL sp_insert_tasks(?,?,?,?)';
    const params = [
        task.title,
        task.description,
        task.priority,
        task.dueDate
        ];
    const [result] = await pool.query(sql, params);
    const info = result[0][0];
    return info;
}

async function update(id, task){
    const sql = 'CALL sp_update_tasks(?,?,?,?,?);'
    const params = [
        id,
        task.title || '',
        task.description || '',
        task.priority || null,
        task.dueDate || null
        ];
    const [result] = await pool.query(sql, params);
    const info = result[0][0];
    return info;
}

async function remove(id) {
    const sql = 'CALL sp_delete_tasks(?);'
    const [result] = await pool.query(sql, [id]);
    const info = result[0][0];
    return info;
}

module.exports = { list, detail, insert, update, remove };