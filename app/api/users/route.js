import { user } from "@/app/user_data/db";
import { NextResponse } from "next/server";

export function GET(){

    const data = user;
    return NextResponse.json(data,{status:200})
}

export async function POST(request)
{
    const post_data = await request.json();
    console.log(post_data.name);

    if(!post_data.fisrt_name || !post_data.last_name || !post_data.age || !post_data.mail)
    {
        return NextResponse.json({result:"Required File Data",success:false},{status:400});
    }
    return NextResponse.json({result:"Ok Succesfull Data",success:true},{status:200});
}

