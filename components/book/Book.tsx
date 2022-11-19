import Image from 'next/image';
import React from 'react';
import BookStep from '../book-step/BookStep';
import Subtitle from '../shared/Subtitle';
import Title from '../shared/Title';

import image1 from './assets/image1.svg';
import image2 from './assets/image2.svg';

import data from './data';

interface BookProps {}

const Book: React.FC<BookProps> = (props) => {
  return (
    <section className="flex xs:flex-col md:flex-row justify-between items-center lg:w-4/5 md:w-full mx-auto xs:p-4">
      {/* <div className="flex sm:flex-col md:flex-row justify-around"> */}
      <div className="xl:w-[511px] md:w-2/5 xl:mr-28 md:mr-12 sm:w-4/5">
        <Subtitle>Easy and Fast</Subtitle>
        <Title>Book your next trip in 3 easy steps</Title>
        <div>
          {data.map((book) => (
            <BookStep key={book.id} {...book} />
          ))}
        </div>
      </div>
      <div className="flex items-center relative md:w-2/5 xs:w-4/5">
        <Image
          className="card-shadow rounded-3xl xs:w-80"
          src={image1}
          alt="book-image"
        />
        <Image
          className="absolute top-1/2 left-1/2 card-shadow rounded-3xl md:w-56 xs:w-52"
          src={image2}
          alt="book-image"
        />
      </div>
      {/* </div> */}
    </section>
  );
};

export default Book;
