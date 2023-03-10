import React from 'react';
import "./feed.css";
import { Posts } from '../../dummyData';
import Post from '../post/Post';
import Share from '../share/Share';

export default function feed() {
  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <Share />
        { Posts.map((p)=> (
          <Post key={p.id} post={p}/>

        ))}
      </div>
    </div>
  );
}
