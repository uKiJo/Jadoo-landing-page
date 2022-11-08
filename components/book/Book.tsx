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
    <section className="mb-24">
      <div className="flex justify-center">
        <div className="w-[511px] mr-28">
          <Subtitle>Easy and Fast</Subtitle>
          <Title>Book your next trip in 3 easy steps</Title>
          <div>
            {data.map((book) => (
              <BookStep key={book.id} {...book} />
            ))}
          </div>
        </div>
        <div className="flex items-center relative">
          <Image
            className="card-shadow rounded-3xl"
            src={image1}
            alt="book-image"
          />
          <Image
            className="absolute top-1/2 left-1/2 card-shadow rounded-3xl"
            src={image2}
            alt="book-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Book;
