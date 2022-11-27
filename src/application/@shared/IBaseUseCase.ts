export default interface IBaseUseCase<I, Promise> {
  execute(input: I): Promise;
}
