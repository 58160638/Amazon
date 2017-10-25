function AmazonService(authService) {
    this.authService = authService
    this.signIn = (Search) => {
        var book = this.authService(Search)
        return {
            title: book.title,
            images: book.images,
            isbn: "0123456789012"
        }
    }

}
test('AmazonAuth', () => {
    //Arrange
    const mock = jest.fn()
        .mockReturnValue({
            title: 'Java Script Good Parts',
            images: '/cover/xyzj.jps',
            isbn: '0123456789012'
        })

    var app = new AmazonService(mock)
        //Act
    var Search = "0123456789012"
    var result = app.signIn(Search)
        //Assert
    expect(mock).toHaveBeenCalled()
    expect(mock).toHaveBeenCalledWith(Search)
    expect(result).toHaveProperty('name')
    expect(result).toHaveProperty('cover')
    expect(result).toHaveProperty('isbn')
    expect(result.title).toBe('Java Script Good Parts')
    expect(result.images).toBe('/cover/xyzj.jps')
    expect(result.isbn).toHaveLength(13)
})