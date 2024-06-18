import CheckAdmin from "../_components/checkAdmin";
import DeleteComment from "./deleteComment";
import DeleteJob from "./deleteJobs";
import DeleteMess from "./deleteMess";
import DeletOrder from "./deleteOrder";
import DeleteProject from "./deleteProject";
import DeleteTeam from "./deleteTeam";
import DeletUser from "./deleteUser";

export default function Delete(){
    return(
        <div className="flex flex-col gap-6">
            <CheckAdmin/>
            <DeletUser/>
            <div className="w-full h-[2px] bg-gray-700"></div>
            <DeletOrder/>
            <div className="w-full h-[2px] bg-gray-700"></div>
            <DeleteComment/>
            <div className="w-full h-[2px] bg-gray-700"></div>
            <DeleteMess/>
            <div className="w-full h-[2px] bg-gray-700"></div>
            <DeleteJob/>
            <div className="w-full h-[2px] bg-gray-700"></div>
            <DeleteTeam/>
            <div className="w-full h-[2px] bg-gray-700"></div>
            <DeleteProject/>
        </div>
    ) 
}