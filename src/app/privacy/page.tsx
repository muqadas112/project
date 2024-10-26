import Link from "next/link"
export default function privacy(){
    return(<div>
        <ul>
            <li><Link href="./">home</Link> </li>
            <li><Link href='./about'>about</Link></li>
            <li> <Link href="./">contact us</Link></li>
        </ul>

    </div>)
    }
