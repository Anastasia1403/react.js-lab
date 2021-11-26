import format from 'date-fns/format';

const freeTimeList = (state) => state.time.time.map((item) => ({ label: format(new Date(item), 'h:mm aaa'), value: item }));

export default freeTimeList;
