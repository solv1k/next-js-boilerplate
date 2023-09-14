import UnderlineLink from "@/components/common/links/underline"
import { Metadata } from "next"

const title: string = 'About project'

export const metadata: Metadata = {
  title: title
}

export default function About() {
  return (
    <main className="p-24 text-center">
      <div className="inline-block py-px px-2 mb-4 text-xs leading-5 text-blue-300 font-medium uppercase">{title}</div>

      <h3 className="text-4xl pb-4">A few facts about our project</h3>

      <div className="font-light text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non pariatur exercitationem qui aspernatur delectus! Voluptatem, magni iure similique deleniti minus fuga officia, hic, adipisci deserunt molestiae debitis neque repellat omnis?
      Velit dolor sapiente fugiat reiciendis placeat cumque neque delectus, nostrum consequuntur aperiam omnis iure tenetur aliquam numquam voluptatem quasi obcaecati! Repellendus, vel enim! Illum nulla itaque porro, excepturi cumque adipisci!
      Praesentium eligendi laborum repellendus earum similique esse sed cupiditate. Minima, odio, deserunt minus ducimus totam, blanditiis quibusdam tenetur illum reprehenderit magni harum officia! Dignissimos quos doloremque voluptate nesciunt tenetur dolorum.
      Similique possimus deleniti rerum, voluptate tenetur quo totam asperiores, recusandae ratione nulla magni deserunt nisi, neque aspernatur. Similique suscipit doloribus ducimus quo. Est temporibus ut laboriosam illum aliquam eius obcaecati.</div>
      
      <UnderlineLink href="/" wrapClassName="mt-4" text="Go home" />
    </main>
  )
}
