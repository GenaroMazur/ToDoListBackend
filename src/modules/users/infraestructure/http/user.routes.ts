import { Router } from "express";
const router = Router({ mergeParams: true });

router.get("/*");

//TODO:CREAR CONTROLADORES
router.post("/signin");
router.post("/signup");

export default router;