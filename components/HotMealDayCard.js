import React from 'react';

import Card, { CardAction, CardParagraph } from './Card';
import useStripeSession from '../hooks/useStripeSession';

const actionCost = 250;

function HotMealDayCard() {
  const [handleSubmit, isPending] = useStripeSession();

  const handleOnClick = () =>
    handleSubmit({
      amount: actionCost,
      cause: 'Hot Meal for 60 Hungry People.',
    });

  return (
    <Card
      action={
        <CardAction isPending={isPending} onClick={handleOnClick}>
          {`Feed 60 people for $${actionCost}`}
        </CardAction>
      }
      backgroundImageAltText="Card about Hot Meal Day"
      backgroundImageSource="/images/HotMealDay.jpg"
      paragraph={
        <CardParagraph>
          {
            'Buy ingredients for 1 hot meal for 60 hungry people. Sample meals include spaghetti with Texas toast and caesar salad, chicken alfredo, enchilada taquitos. Served as take-home meal boxes at Grace Resources in Lancaster, California.'
          }
        </CardParagraph>
      }
      title={<>{'Hot Meal Day'}</>}
    />
  );
}

export default HotMealDayCard;
