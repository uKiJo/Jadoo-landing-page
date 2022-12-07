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
    <section className="md:grid md:grid-cols-2 md:grid-rows-[h-fit] xs:flex xs:flex-col xs:justify-center mb-24 md:w-4/5 md:w-full mx-auto xs:p-4">
      <div className="xl:w-[511px] lg:w-[450px] md:w-full md:col-start-1 md:col-span-2 lg:col-start-1 lg:col-end-2">
        <Subtitle>Easy and Fast</Subtitle>
        <Title>Book your next trip in 3 easy steps</Title>
      </div>
      <div className="xl:w-[511px] md:w-11/12 xl:mr-28 md:mr-12 sm:w-4/5 sm:mb-8">
        {data.map((book) => (
          <BookStep key={book.id} {...book} />
        ))}
      </div>
      <div className="md:col-start-2 lg:row-end-3 lg:row-span-2 md:row-start-2 self-center justify-self-center relative md:w-2/3 xs:w-4/5">
        <Image
          className="card-shadow rounded-3xl xs:w-4/5 md:w-full xl:w-4/5"
          src={image1}
          alt="book-image"
        />
        <Image
          className="absolute top-1/2 left-1/2 card-shadow rounded-3xl xs:w-1/2 md:w-2/3 xl:w-3/5"
          src={image2}
          alt="book-image"
        />
      </div>
    </section>
  );
};

export default Book;
