import { user } from "@/app/user_data/db";
import { NextResponse } from "next/server";

export function GET(request,user_data){

    const data = user;
    console.log(data,user_data.params.userid);

    const user_id = data.filter((item)=> item.id == user_data.params.userid)

    return NextResponse.json(user_id.length==0 ? {result:"Not Found Data",success:false} : {user_id},{status:200})
}


