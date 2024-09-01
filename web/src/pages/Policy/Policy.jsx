import React from "react";
import { useParams } from "react-router-dom";

export default function Policy() {
    const params=useParams();
    const policy={
        heading:params.policy,
        body:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat a
        similique consectetur atque nihil dolore ipsum obcaecati natus cum,
        excepturi officiis culpa dolorem, ipsam saepe nostrum, libero nulla.
        Harum tempore aliquam cum adipisci, esse modi culpa alias at dignissimos
        aut reiciendis et. Quos reprehenderit officia in aliquam, eius
        exercitationem sit tenetur iusto totam dolorem quaerat. Adipisci
        recusandae ullam facere. Hic, ipsa eius. Sunt, voluptates a temporibus
        vero ad nesciunt? Ea, corrupti qui perferendis ducimus ut adipisci
        vitae, aliquam vel mollitia fuga voluptates quo optio, tempora tempore
        sit! Obcaecati, harum deserunt. Ab dolorem corporis odio commodi
        perspiciatis dolorum veritatis illum. Sunt officiis, numquam iusto
        itaque corrupti tempore. Ipsam impedit expedita mollitia temporibus
        officia fuga? Consequuntur dolore dolorem repellat dolores labore
        ratione rem odit nam tempore aliquid minima quo, laudantium suscipit
        tempora placeat reprehenderit velit quis, laboriosam unde sapiente a
        consequatur, illum mollitia aliquam! Distinctio possimus dolor aut
        labore voluptatum non ut commodi velit. Inventore ipsum ullam, nam et
        hic, eligendi labore accusantium dolores beatae nulla odit, quibusdam
        consequuntur rerum adipisci voluptatem placeat recusandae voluptatibus
        voluptas? In, odio unde incidunt hic facere a corporis excepturi quidem
        porro aperiam. Minus, in nisi facere velit amet optio tenetur quis
        dignissimos esse itaque tempore animi. Nisi, quidem! Odio, sunt impedit
        sed facilis quaerat minus rerum! Impedit, dicta voluptatum debitis
        quibusdam consectetur cum facilis earum! Et, sunt mollitia, eos nesciunt
        culpa in cum officia neque dolores impedit quam libero rerum autem hic
        sed. Similique voluptas beatae numquam unde aliquam culpa quas qui,
        nihil, laudantium quis reiciendis nesciunt cumque voluptatem! Quas
        assumenda sed dolorem perspiciatis illo quae ratione repellendus velit
        cumque, explicabo quis obcaecati tempora. Maxime fuga quos assumenda ab
        vitae incidunt explicabo non eius consectetur praesentium architecto ad
        iure veniam dolor, quis natus quas repellendus eaque quasi veritatis
        voluptate quidem. Molestias distinctio quod minima ea a.`
    }
    
	return (
		<>
			<h1>{policy.heading} policy</h1>
            <br />
			<p>
				{policy.body}
			</p>
		</>
	);
}
