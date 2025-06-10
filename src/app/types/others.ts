import { ReactNode } from "react";

export type TabProps = "tab-1" | "tab-2" | "tab-3" | "tab-4" | "tab-5";

export type BlackBtnProps = {
  children: ReactNode;
};

export type WhiteBtnProps = {
  children: ReactNode;
  loadMoreItems?: () => void;
};

export type InputProps = {
  id: string;
  label?: string;
  name: string;
  placeholder?: string;
};

export type CustomModalProps = {
  children: ReactNode;
  isOpen: boolean;
  closeModal: () => void;
};

export type Category =
  | "World"
  | "Africa"
  | "Asia"
  | "Europe"
  | "North America"
  | "South America"
  | "Antarctica"
  | "Australia";

export interface Images {
  image: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  image6: string;
}

export interface Trip {
  id: number;
  place: string;
  text: string;
  image: string;
  imageWide: string;
  price: number;
  category: Category;
  rating: number;
  images: Images;
}

export interface Review {
  id: number;
  name: string;
  text: string;
  image: string;
  place: string;
}

export interface Luxtrip {
  id: number;
  title: string;
  image: string;
}

interface Info {
  title: string;
  text: string;
}

export interface Book {
  id: number;
  title: string;
  text: string;
  image: string;
  info: Info;
}

export interface FilterComponentProps {
  onFilterChange: (category: Category) => void;
  categories: Category[];
}

export interface HeaderState {
  isMenuToggled: boolean;
}

export interface ModalState {
  isModalOpen: boolean;
}
