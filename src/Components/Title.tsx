
import { cn } from "@/lib/Utils";

type props ={
    title: string,
    className: string;

}

const Title = ({title,className}:props) => {
  return (
    <div>
      <h2 className={cn(`text-3xl font-semibold pb-5 border-b-[1px] border-b-zinc-500`,className)}>{title}</h2>
    </div>
  )
}

export default Title
