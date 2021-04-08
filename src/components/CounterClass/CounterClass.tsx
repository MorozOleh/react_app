import React, { useEffect } from 'react';
import { observer, useLocalObservable } from 'mobx-react';
import { getProperty } from './App/app';

const categ = 'test_categories';
const min = 'test_minutes';
const b = 'test_blocks';

const getData = async () => {
  const [categories, minutes, blocks] = await Promise.all(
    [getProperty(categ), getProperty(min), getProperty(b)])
  
  console.log(categories);
  console.log(minutes);
  console.log(blocks);
}

export const CounterClass = observer(() => {

  useEffect(() => {
    getData()
  }, [])
  
  const store = useLocalObservable(() => {
    return {
      state: 4
    }
  })




  return (
    <></>
  )
})
