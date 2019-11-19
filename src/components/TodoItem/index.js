import React from 'react';
import './styles.css';

function TodoItem({ post }) {
 return (
   <div className="post">
     <div className='post-header'>
      <img src={post.author.avatar} alt={post.author.name} />
      <div>
        <strong>{post.author.name}</strong>
        <span>{post.date}</span>
      </div>
     </div>
     <div className='post-content'>
       <p>{post.content}</p>
     </div>
     {post.comments.map(comment => (
        <div key={comment.id} className='post-comments'>
          <img src={comment.author.avatar} alt={comment.author.name}/>
          <div>
            <p>{comment.content}</p>
          </div>
        </div>
      ))}
   </div>
 )
}

export default TodoItem;