import {StyleSheet} from 'react-native';

export const COLOR = {
  color10: '#B25E00',
  color30: '#000',
  color60: '#fff',
  gray: '#E8E8E6',
  red: '#EA001F',
  line: '#D9D9D9',
  star: '#FFC41C',
  nostar: '#B2B0AA',
};

export const FONT = StyleSheet.create({
  title: {
    fontFamily: 'DMSans-Bold',
    fontSize: 20,
    lineHeight: 28,
    color: COLOR.color30,
  },
  subtitle: {
    fontFamily: 'DMSans-Medium',
    fontSize: 16,
    lineHeight: 24,
    color: COLOR.color30,
  },
  identifier: {
    fontFamily: 'DMSans-Medium',
    fontSize: 14,
    lineHeight: 20,
    color: COLOR.color30,
  },
  content: {
    fontFamily: 'DMSans-Regular',
    fontSize: 12,
    lineHeight: 16,
    color: COLOR.color30,
  },
  detail: {
    fontFamily: 'DMSans-Regular',
    fontSize: 10,
    lineHeight: 14,
    color: COLOR.color30,
  },
});

export const CONTAINER = StyleSheet.create({
  flexbox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexgap8: {
    display: 'flex',
    gap: 8,
  },
  flexgap16: {
    display: 'flex',
    gap: 16,
  },
  checkbox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
  },
  flexrow: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export const ICON = StyleSheet.create({
  icon24: {
    fontSize: 24,
    lineHeight: 32,
    color: COLOR.color30,
  },
});

export const IMG = StyleSheet.create({
  logo: {
    borderRadius: 999,
    elevation: 8,
    shadowColor: COLOR.color30,
  },
});

export const CHECKBOX = StyleSheet.create({
  off: {
    borderColor: COLOR.line,
    borderRadius: 4,
    borderWidth: 1,
    width: 16,
    height: 16,
  },
  active: {
    height: 16,
    width: 16,
    backgroundColor: COLOR.color10,
    borderRadius: 4,
  },
});
