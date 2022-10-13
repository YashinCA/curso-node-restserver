const { Router } = require('express');
const router = Router();

const {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch } = require('../controllers/usuarios.controller');

router.get('/', usuariosGet);

router.put('/:id', usuariosPut);

router.post('/', usuariosPost);

router.delete('/:id', usuariosDelete);

router.patch('/', usuariosPatch);

module.exports = router;