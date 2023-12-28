import { NextResponse } from "next/server";

export async function GET(request,contain)
{

    console.log(contain);
    const studnetdetails=contain.params.student;

    return(
        NextResponse.json({result:studnetdetails},{status:200})
    )
}
