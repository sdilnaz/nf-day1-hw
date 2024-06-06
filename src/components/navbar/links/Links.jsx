import Link from "next/link"
const links = () => {
    const links = [
        {
            title:"Home",
            path:"/"
        },
        {
            title:"About",
            path:"/about"
        },
        {
            title:"Blog",
            path:"/blog"
        }
    ]
    return (
      <div>
        {links.map(link=>(
            <Link href = {link.path} key = {link.title}>{link.title}</Link>
        ))}
      </div>
    )
  }
  
  export default links
