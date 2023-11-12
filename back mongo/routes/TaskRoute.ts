import express, { Request, Response } from "express";
import Task, { ITask } from "../models/Tasks";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    
    try{
        const tasks: ITask[] = await Task.find();
        res.json(tasks);
    }catch(error){
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }

})

router.post("/", async (req: Request, res: Response) => {
    const task = new Task({
        title: req.body.title,
    })

    try{
        const newTask: ITask = await task.save();
        res.status(201).json(newTask);
    }catch(error){
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
})

router.delete("/:id", async (req: Request, res: Response) => {

    try{
        const task: ITask | null = await Task.findByIdAndDelete(req.params.id);

        if(task){
            await Task.deleteOne()
            res.json(task);
        } else{
            res.status(404).json({message: "Task not found"});
        }


    }catch(error){
        console.log(error);
    }
})

export default router;