const express = require('express');
const router = express.Router();

const mysqlConnection = require('../configurations/db-conf');

/*---------------------------------------Curso Docente----------------------------------------*/
/*Get-Cursos Docentes*/
router.get('/cursos-docentes',(req,res)=>{
    console.log('get lista Cursos Docentes')
    mysqlConnection.query('select s.id, s.id_docente, p.nombre as docente, s.id_curso, c.nombre, s.stauts, s.fecha_inicio, s.fecha_fin from oexk6sn6x2lc0kha.curso_docente s join oexk6sn6x2lc0kha.docente d on d.id = s.id_docente join oexk6sn6x2lc0kha.curso c on c.id = s.id_curso join oexk6sn6x2lc0kha.persona p on p.id = d.id_persona',(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
            res.send('Error');
        }
    })
});
/*Get-id-Cursos Docentes*/
router.get('/cursos-docentes/:id',(req,res)=>{
    console.log('get Cursos Docentes')
    mysqlConnection.query('select s.id, s.id_docente, p.nombre as docente, s.id_curso, c.nombre, s.stauts, s.fecha_inicio, s.fecha_fin from oexk6sn6x2lc0kha.curso_docente s join oexk6sn6x2lc0kha.docente d on d.id = s.id_docente join oexk6sn6x2lc0kha.curso c on c.id = s.id_curso join oexk6sn6x2lc0kha.persona p on p.id = d.id_persona where s.id = ?;',[req.params.id],(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
            res.send('Error');
        }
    })
});
/*Insert-Cursos Docentes*/
router.post('/cursos-docentes',(req,res)=>{
    console.log('Insert Cursos Docentes')
    let emp=req.body;
    console.log(emp);
    mysqlConnection.query('insert into curso_docente (id_docente, id_curso, stauts, fecha_inicio, fecha_fin) values (?,?,?,?,?)',
    [emp.id_docente,emp.id_curso,emp.stauts,emp.fecha_inicio,emp.fecha_fin],(err,result)=>{
        if(!err){
            console.log(result);
            res.status(201).send('created Successfully');
        }else{
            console.log(err);
            res.send('Error'+err);
        }
    })
});

/*Update-Cursos Docentes*/
router.put('/cursos-docentes/:id',(req,res)=>{
    console.log('Update Cursos Docentes')
    let emp=req.body;
    mysqlConnection.query('update curso_docente set id_docente=?, id_curso=?, stauts=?, fecha_inicio=?, fecha_fin=? where id=?',
    [emp.id_docente,emp.id_curso,emp.stauts,emp.fecha_inicio,emp.fecha_fin,req.params.id],(err,result)=>{
        if(!err){
            console.log(result);
            res.status(202).send('Updated Successfully');
        }else{
            console.log(err);
            res.send('Error'+err);
        }
    })
});

/*Delete-Cursos Docentes*/
router.delete('/cursos-docentes/:id',(req,res)=>{
    console.log('Delete Cursos Docentes')
    mysqlConnection.query('delete from curso_docente where id = ?',[req.params.id],(err,result)=>{
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