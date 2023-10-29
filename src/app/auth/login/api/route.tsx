import { NextRequest, NextResponse } from 'next/server';
import { loginFormSchema } from '@/app/lib/validations/LoginValidation';

export async function POST(request: NextRequest) {
    try {
        const { email, password } = loginFormSchema.parse(await request.json());

        return new NextResponse('It Works');
    } catch (error: any) {
        return new NextResponse(error.Message, { status: 400 });
    }
}