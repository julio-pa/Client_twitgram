
import FilterButtom from './FilterButtom';
import NotiCard from './NotiCard';

const NotiList = () => {
  return (
    <div className='border border-gray-400 rounded-lg p-6 '>
      <div className='flex gap-2 mb-6'>
        <FilterButtom title='All' />
        <FilterButtom title='My posts' />
        <FilterButtom title='Mentions' />
      </div>
      <NotiCard user='frank' desc='los mejore postres' />
      <NotiCard user='frank' desc='los mejore postres' />
      <NotiCard user='frank' desc='los mejore postres' />
    </div>
  );
}

export default NotiList;
