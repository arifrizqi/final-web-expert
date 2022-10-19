/* eslint-disable no-undef */
const assert = require('assert');

// eslint-disable-next-line no-undef
Feature('Liking Restaurant');

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/');
  I.wait(3);
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.amOnPage('/#/like');
  I.wait(3);
  I.seeElement('.restaurants');
  I.wait(3);
  I.see('You dont have any favorite Restaurant', '.restaurants');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/#/home');
  I.wait(3);
  I.seeElement('h3 a');
  I.wait(3);
  const firstResto = locate('h3 a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);
  I.wait(3);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(3);
  I.amOnPage('/#/like');
  I.wait(3);
  I.seeElement('.restaurant-item');
  I.wait(3);
  const likedRestoTitle = await I.grabTextFrom('h3 a');
  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/#/home');
  I.wait(2);

  // like restaurant fisrt
  const firstCard = locate('h3').first();
  const cardLink = firstCard.find('a');
  I.click(cardLink);
  I.wait(2);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // unlike restaurant
  I.amOnPage('/#/like');
  I.wait(2);
  const firstLikedCard = locate('h3').first();
  const cardLikedLink = firstLikedCard.find('a');
  I.click(cardLikedLink);
  I.wait(2);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // check if favorite page is empty
  I.amOnPage('/#/like');
  I.wait(2);
  I.see('You dont have any favorite Restaurant', '.restaurants');
});
