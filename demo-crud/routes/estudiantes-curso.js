const express = require('express');
const router = express.Router();

const mysqlConnection = require('../configurations/db-conf');

/*---------------------------------------Estudiantes Cursos----------------------------------------*/
/*Get-Estudiantes Cursos*/
router.get('/estudiantes-cursos',(req,res)=>{
    console.log('get lista estudiantes cursos')
    mysqlConnection.query('select a.id, a.id_estudiante, p.nombre as estudiante, a.id_curso, c.nombre, a.status, a.fecha_inicio, a.fecha_fin from oexk6sn6x2lc0kha.estudiante_curso a join oexk6sn6x2lc0kha.estudiante e on e.id = a.id_estudiante join oexk6sn6x2lc0kha.curso c on c.id = a.id_curso join oexk6sn6x2lc0kha.persona p on p.id = e.id_persona;',(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
            res.send('Error');
        }
    })
});
/*Get-id-Estudiantes Cursos*/
router.get('/estudiantes-cursos/:id',(req,res)=>{
    console.log('get estudiantes cursos')
    mysqlConnection.query('select a.id, a.id_estudiante, p.nombre as estudiante, a.id_curso, c.nombre, a.status, a.fecha_inicio, a.fecha_fin from oexk6sn6x2lc0kha.estudiante_curso a join oexk6sn6x2lc0kha.estudiante e on e.id = a.id_estudiante join oexk6sn6x2lc0kha.curso c on c.id = a.id_curso join oexk6sn6x2lc0kha.persona p on p.id = e.id_persona where a.id = ?;',[req.params.id],(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
            res.send('Error');
        }
    })
});
/*Insert-Estudiantes Cursos*/
router.post('/estudiantes-cursos',(req,res)=>{
    console.log('Insert estudiantes cursos')
    let emp=req.body;
    console.log(emp);
    mysqlConnection.query('insert into estudiante_curso (id_estudiante, id_curso, status, fecha_inicio, fecha_fin) values (?,?,?,?,?)',
    [emp.id_estudiante,emp.id_curso,emp.status,emp.fecha_inicio,emp.fecha_fin],(err,result)=>{
        if(!err){
            console.log(result);
            res.status(201).send('created Successfully');
        }else{
            console.log(err);
            res.send('Error'+err);
        }
    })
});

/*Update-Estudiantes Cursos*/
router.put('/estudiantes-cursos/:id',(req,res)=>{
    console.log('Update estudiantes cursos')
    let emp=req.body;
    mysqlConnection.query('update estudiante_curso set id_estudiante=?, id_curso=?, status=?, fecha_inicio=?, fecha_fin=? where id=?',
    [emp.id_estudiante,emp.id_curso,emp.status,emp.fecha_inicio,emp.fecha_fin,req.params.id],(err,result)=>{
        if(!err){
            console.log(result);
            res.status(202).send('Updated Successfully');
        }else{
            console.log(err);
            res.send('Error'+err);
        }
    })
});

/*Delete-Estudiantes Cursos*/
router.delete('/estudiantes-cursos/:id',(req,res)=>{
    console.log('Delete estudiantes cursos')
    mysqlConnection.query('delete from estudiante_curso where id = ?',[req.params.id],(err,result)=>{
        if(!err){
            console.log(result);
            res.status(202).send('Deleted Successfully');
        }else{
            console.log(err);
            res.send('Error'+err);
        }
    })
});

module.exports = router;