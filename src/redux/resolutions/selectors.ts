import { Resolution } from 'types/resolutions';
import { RootState } from 'redux/store';
import { formatDateForResolution } from 'utils/formatDate';

export const resolutionsSelector = (state: RootState) => state.resolutions.resolutions
  .map((item: Resolution<Date>) => {
    const visitDate = formatDateForResolution(item.visit_date);
    const nextVisit = formatDateForResolution(item.next_appointment_date);
    return { ...item, visit_date: visitDate, next_appointment_date: nextVisit };
  });

export const isLoadingSelector = (state: RootState) => state.resolutions.loading;
export const resolutionErrorSelector = (state: RootState) => state.resolutions.error;
