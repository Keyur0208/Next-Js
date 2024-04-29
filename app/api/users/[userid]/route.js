import { user } from "@/app/user_data/db";
import { NextResponse } from "next/server";

export function GET(request,user_data){

    const data = user;
    console.log(data,user_data.params.userid);

    const user_id = data.filter((item)=> item.id == user_data.params.userid)

    return NextResponse.json(user_id.length==0 ? {result:"Not Found Data",success:false} : {result:user_id},{status:200})
}

export async function PUT(request,contain)
{
    let put_data = await  request.json();
    put_data.user_id = contain.params.userid;
    console.log(put_data);

    if(!put_data.first_name || !put_data.last_name || !put_data.age  || !put_data.mail )
    {
        return(
            NextResponse.json({result:"Data Not Fill",success:false},{status:400})
        )
    }
    else
    {
        return  NextResponse.json({result:put_data,success:true},{status:200})

    }
}

export function DELETE(request,containe)
{
    let delete_data = containe.params.userid
    console.log(delete_data);

    if(delete_data)
    {
        return NextResponse.json({result:"SuccessFull Data Delete",success:true},{status:200})
    }
    else
    {
        return NextResponse.json({result:"UnSuccessFull Data Delete",success:false},{status:400})
    }
}


