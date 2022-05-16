export default function shallowMerge<T>(baseObj: T, newData: Partial<T>) {
    return { ...baseObj, ...newData };
  }
  