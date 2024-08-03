import { TaskCard } from "./TaskCard";
import { useContext } from "react";
import { Context } from "../context/Context";

export const TaskList = () => { 

    const { tasks } = useContext(Context);

    return(
        <div className="grid grid-cols-4 gap-2">
            {
                tasks.map( (task)=> (
                    <TaskCard key={task.id} task={task} />
                ))
            }
        </div>
    )
};