import { Router } from "express";
const router = Router({ mergeParams: true });

//TODO:CREAR CONTROLADORES
router.route("/")
    .get()
    .post();

router.route(":id")
    .get()
    .delete()
    .patch();

export default router;