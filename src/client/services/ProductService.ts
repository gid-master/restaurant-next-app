import axios from 'axios';
import { IResponse } from '@/client/interfaces/IResponse';
import { IProduct } from '@/client/interfaces/IProduct';

export const getAllProducts = async (): Promise<IResponse<IProduct[]>> => axios.get('product');
