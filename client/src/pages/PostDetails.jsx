import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from '../components/PostAuthor'
import Thumbnail  from "../images/blog100.jpg"
const PostDetails = () => {
  return (
    <section className="post__detail">
        <div className="container post-detail__container">
            <div className="post__detail-header">
                <PostAuthor />
                <div className="post__detail-buttons">
                    <Link to={`/posts/wermwer/edit`} className='btn sm primary'>Edit</Link>
                    <Link to={`/posts/wermwer/delete`} className='btn sm danger'>Delete</Link>
                </div>
            </div>
            <h1>This is the post title</h1>
            <div className="post__detail-thumbnail">
                <img src={Thumbnail} alt="" />
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque tenetur molestiae soluta veritatis minima aliquid et nam! Non illo ipsum sapiente rem minus, magni sequi eaque sint enim eum dolor, animi cumque quod quae praesentium voluptatum consequatur temporibus nemo ex.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis. Amet, iusto nulla, officiis placeat soluta maxime sed esse error iure dolor autem. Voluptatem ea, distinctio numquam sapiente eveniet suscipit porro qui laboriosam sint aperiam minima in, veritatis architecto nostrum fugiat. At non itaque, dolores, qui deserunt corrupti in sint, totam pariatur minima rerum autem!
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, consequuntur possimus. Quod officia quo maxime reiciendis temporibus, modi iusto consequuntur libero veritatis officiis tempore earum magni minus assumenda ullam nobis odit eaque quaerat alias omnis nulla eos distinctio excepturi! Minima voluptates illo libero dolorum obcaecati eius non laboriosam, delectus quidem veniam doloribus, rem maxime. Fugit commodi, incidunt eligendi sequi, corrupti ratione facilis consequatur qui nisi dignissimos magnam nihil necessitatibus labore sit! Vitae quis iste temporibus non quia ex, explicabo dignissimos est reprehenderit molestias molestiae tenetur sequi possimus officiis aut incidunt. A corrupti rem id dolore assumenda atque consequuntur debitis doloremque commodi ut velit omnis officia veritatis sed, illum laudantium totam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, consequuntur possimus. Quod officia quo maxime reiciendis temporibus, modi iusto consequuntur libero veritatis officiis tempore earum magni minus assumenda ullam nobis odit eaque quaerat alias omnis nulla eos distinctio excepturi! Minima voluptates illo libero dolorum obcaecati eius non laboriosam, delectus quidem veniam doloribus, rem maxime. Fugit commodi, incidunt eligendi sequi, corrupti ratione facilis consequatur qui nisi dignissimos magnam nihil necessitatibus labore sit! Vitae quis iste temporibus non quia ex, explicabo dignissimos est reprehenderit molestias molestiae tenetur sequi possimus officiis aut incidunt. A corrupti rem id dolore assumenda atque consequuntur debitis doloremque commodi ut velit omnis officia veritatis sed, illum laudantium totam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, consequuntur possimus. Quod officia quo maxime reiciendis temporibus, modi iusto consequuntur libero veritatis officiis tempore earum magni minus assumenda ullam nobis odit eaque quaerat alias omnis nulla eos distinctio excepturi! Minima voluptates illo libero dolorum obcaecati eius non laboriosam, delectus quidem veniam doloribus, rem maxime. Fugit commodi, incidunt eligendi sequi, corrupti ratione facilis consequatur qui nisi dignissimos magnam nihil necessitatibus labore sit! Vitae quis iste temporibus non quia ex, explicabo dignissimos est reprehenderit molestias molestiae tenetur sequi possimus officiis aut incidunt. A corrupti rem id dolore assumenda atque consequuntur debitis doloremque commodi ut velit omnis officia veritatis sed, illum laudantium totam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, consequuntur possimus. Quod officia quo maxime reiciendis temporibus, modi iusto consequuntur libero veritatis officiis tempore earum magni minus assumenda ullam nobis odit eaque quaerat alias omnis nulla eos distinctio excepturi! Minima voluptates illo libero dolorum obcaecati eius non laboriosam, delectus quidem veniam doloribus, rem maxime. Fugit commodi, incidunt eligendi sequi, corrupti ratione facilis consequatur qui nisi dignissimos magnam nihil necessitatibus labore sit! Vitae quis iste temporibus non quia ex, explicabo dignissimos est reprehenderit molestias molestiae tenetur sequi possimus officiis aut incidunt. A corrupti rem id dolore assumenda atque consequuntur debitis doloremque commodi ut velit omnis officia veritatis sed, illum laudantium totam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, consequuntur possimus. Quod officia quo maxime reiciendis temporibus, modi iusto consequuntur libero veritatis officiis tempore earum magni minus assumenda ullam nobis odit eaque quaerat alias omnis nulla eos distinctio excepturi! Minima voluptates illo libero dolorum obcaecati eius non laboriosam, delectus quidem veniam doloribus, rem maxime. Fugit commodi, incidunt eligendi sequi, corrupti ratione facilis consequatur qui nisi dignissimos magnam nihil necessitatibus labore sit! Vitae quis iste temporibus non quia ex, explicabo dignissimos est reprehenderit molestias molestiae tenetur sequi possimus officiis aut incidunt. A corrupti rem id dolore assumenda atque consequuntur debitis doloremque commodi ut velit omnis officia veritatis sed, illum laudantium totam.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, consequuntur possimus. Quod officia quo maxime reiciendis temporibus, modi iusto consequuntur libero veritatis officiis tempore earum magni minus assumenda ullam nobis odit eaque quaerat alias omnis nulla eos distinctio excepturi! Minima voluptates illo libero dolorum obcaecati eius non laboriosam, delectus quidem veniam doloribus, rem maxime. Fugit commodi, incidunt eligendi sequi, corrupti ratione facilis consequatur qui nisi dignissimos magnam nihil necessitatibus labore sit! Vitae quis iste temporibus non quia ex, explicabo dignissimos est reprehenderit molestias molestiae tenetur sequi possimus officiis aut incidunt. A corrupti rem id dolore assumenda atque consequuntur debitis doloremque commodi ut velit omnis officia veritatis sed, illum laudantium totam.</p>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est saepe provident, eveniet officia hic amet eligendi perspiciatis eos inventore velit voluptas quidem, repellendus maxime ducimus.
            </p>
        </div>
    </section>
  )
}

export default PostDetails