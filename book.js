// ==================== BOOK MODULE ====================
// Dữ liệu từ "The Art of Game Design" – Jesse Schell
// (Trích từ file PDF đã cung cấp)

// --- Danh sách 100 Lenses (đầy đủ từ tài liệu) ---
const lensesData = [
    { number: 1, name: "Essential Experience", description: "Tập trung vào trải nghiệm cốt lõi mà game muốn mang lại." },
    { number: 2, name: "Surprise", description: "Sự bất ngờ là yếu tố then chốt của niềm vui." },
    { number: 3, name: "Fun", description: "Niềm vui là sự hài lòng kèm bất ngờ." },
    { number: 4, name: "Curiosity", description: "Người chơi bị thúc đẩy bởi những câu hỏi chưa có lời đáp." },
    { number: 5, name: "Endogenous Value", description: "Giá trị nội tại của vật phẩm trong game." },
    { number: 6, name: "Problem Solving", description: "Mọi game đều là hoạt động giải quyết vấn đề." },
    { number: 7, name: "Elemental Tetrad", description: "Cân bằng Mechanics, Story, Aesthetics, Technology." },
    { number: 8, name: "Holographic Design", description: "Nhìn thấy cả cấu trúc và trải nghiệm cùng lúc." },
    { number: 9, name: "Unification", description: "Thống nhất tất cả yếu tố dưới một chủ đề." },
    { number: 10, name: "Resonance", description: "Khai thác những chủ đề sâu sắc, cộng hưởng với người chơi." },
    { number: 11, name: "Infinite Inspiration", description: "Tìm cảm hứng từ mọi thứ ngoài game." },
    { number: 12, name: "Problem Statement", description: "Xác định rõ vấn đề cần giải quyết." },
    { number: 13, name: "Eight Filters", description: "Kiểm tra thiết kế qua 8 bộ lọc." },
    { number: 14, name: "Risk Mitigation", description: "Nhận diện và giảm thiểu rủi ro sớm." },
    { number: 15, name: "Toy", description: "Game phải vui ngay cả khi không có mục tiêu." },
    { number: 16, name: "Player", description: "Hiểu sâu về đối tượng người chơi." },
    { number: 17, name: "Pleasure", description: "Các dạng niềm vui mà game mang lại." },
    { number: 18, name: "Flow", description: "Trạng thái tập trung tối ưu." },
    { number: 19, name: "Needs", description: "Đáp ứng các nhu cầu cơ bản của con người." },
    { number: 20, name: "Judgment", description: "Cảm giác được đánh giá công bằng." },
    { number: 21, name: "Functional Space", description: "Không gian chức năng của game." },
    { number: 22, name: "Dynamic State", description: "Các trạng thái thay đổi trong game." },
    { number: 23, name: "Emergence", description: "Gameplay phát sinh từ tương tác đơn giản." },
    { number: 24, name: "Action", description: "Hành động người chơi có thể thực hiện." },
    { number: 25, name: "Goals", description: "Mục tiêu rõ ràng, khả thi, xứng đáng." },
    { number: 26, name: "Rules", description: "Các quy tắc nền tảng của game." },
    { number: 27, name: "Skill", description: "Kỹ năng người chơi cần có." },
    { number: 28, name: "Expected Value", description: "Tính toán giá trị kỳ vọng." },
    { number: 29, name: "Chance", description: "Yếu tố may rủi và rủi ro." },
    { number: 30, name: "Fairness", description: "Sự công bằng trong game." },
    { number: 31, name: "Challenge", description: "Thử thách vừa đủ." },
    { number: 32, name: "Meaningful Choices", description: "Lựa chọn có tác động thực sự." },
    { number: 33, name: "Triangularity", description: "Rủi ro thấp – phần thưởng thấp, rủi ro cao – phần thưởng cao." },
    { number: 34, name: "Skill vs. Chance", description: "Cân bằng kỹ năng và may mắn." },
    { number: 35, name: "Head and Hands", description: "Cân bằng tư duy và thao tác." },
    { number: 36, name: "Competition", description: "Cạnh tranh lành mạnh." },
    { number: 37, name: "Cooperation", description: "Hợp tác hiệu quả." },
    { number: 38, name: "Competition vs. Cooperation", description: "Kết hợp cả hai." },
    { number: 39, name: "Time", description: "Độ dài game phù hợp." },
    { number: 40, name: "Reward", description: "Phần thưởng đa dạng và hấp dẫn." },
    { number: 41, name: "Punishment", description: "Hình phạt công bằng, có mục đích." },
    { number: 42, name: "Simplicity/Complexity", description: "Đơn giản nhưng sâu sắc." },
    { number: 43, name: "Elegance", description: "Mỗi yếu tố phục vụ nhiều mục đích." },
    { number: 44, name: "Character", description: "Tính cách riêng của game." },
    { number: 45, name: "Imagination", description: "Để trí tưởng tượng lấp đầy khoảng trống." },
    { number: 46, name: "Economy", description: "Cân bằng kinh tế game." },
    { number: 47, name: "Balance", description: "Cảm giác tổng thể cân bằng." },
    { number: 48, name: "Accessibility", description: "Dễ tiếp cận." },
    { number: 49, name: "Visible Progress", description: "Thấy rõ tiến trình." },
    { number: 50, name: "Parallelism", description: "Nhiều thử thách song song." },
    { number: 51, name: "Pyramid", description: "Cấu trúc hình chóp – nhiều nhỏ dồn về lớn." },
    { number: 52, name: "Puzzle", description: "Câu đố vừa sức." },
    { number: 53, name: "Control", description: "Cảm giác kiểm soát." },
    { number: 54, name: "Physical Interface", description: "Giao diện vật lý." },
    { number: 55, name: "Virtual Interface", description: "Giao diện ảo." },
    { number: 56, name: "Transparency", description: "Giao diện vô hình." },
    { number: 57, name: "Feedback", description: "Phản hồi rõ ràng." },
    { number: 58, name: "Juiciness", description: "Phản hồi mượt mà, đầy cảm xúc." },
    { number: 59, name: "Channels and Dimensions", description: "Kênh và chiều thông tin." },
    { number: 60, name: "Modes", description: "Các chế độ chơi." },
    { number: 61, name: "Interest Curve", description: "Đường cong hứng thú." },
    { number: 62, name: "Inherent Interest", description: "Yếu tố vốn đã thú vị." },
    { number: 63, name: "Beauty", description: "Vẻ đẹp thẩm mỹ." },
    { number: 64, name: "Projection", description: "Sự đồng cảm, nhập vai." },
    { number: 65, name: "Story Machine", description: "Game như cỗ máy sinh câu chuyện." },
    { number: 66, name: "Obstacle", description: "Chướng ngại vật có ý nghĩa." },
    { number: 67, name: "Simplicity and Transcendence", description: "Thế giới đơn giản nhưng vượt trội." },
    { number: 68, name: "Hero's Journey", description: "Hành trình của anh hùng." },
    { number: 69, name: "Weirdest Thing", description: "Điều kỳ lạ nhất – gây ấn tượng." },
    { number: 70, name: "Story", description: "Câu chuyện hỗ trợ gameplay." },
    { number: 71, name: "Freedom", description: "Cảm giác tự do." },
    { number: 72, name: "Indirect Control", description: "Điều khiển gián tiếp." },
    { number: 73, name: "Collusion", description: "NPC hợp tác với designer." },
    { number: 74, name: "World", description: "Thế giới game." },
    { number: 75, name: "Avatar", description: "Nhân vật đại diện." },
    { number: 76, name: "Character Function", description: "Chức năng của từng nhân vật." },
    { number: 77, name: "Character Traits", description: "Tính cách nhân vật." },
    { number: 78, name: "Interpersonal Circumplex", description: "Mối quan hệ nhân vật." },
    { number: 79, name: "Character Web", description: "Mạng lưới quan hệ." },
    { number: 80, name: "Status", description: "Địa vị xã hội trong game." },
    { number: 81, name: "Character Transformation", description: "Sự thay đổi của nhân vật." },
    { number: 82, name: "Inner Contradiction", description: "Loại bỏ mâu thuẫn nội tại." },
    { number: 83, name: "Nameless Quality", description: "Chất vô danh – sự sống động." },
    { number: 84, name: "Friendship", description: "Tình bạn qua game." },
    { number: 85, name: "Expression", description: "Biểu đạt bản thân." },
    { number: 86, name: "Community", description: "Cộng đồng người chơi." },
    { number: 87, name: "Griefing", description: "Chống lại hành vi phá hoại." },
    { number: 88, name: "Love", description: "Yêu dự án, yêu khán giả." },
    { number: 89, name: "Team", description: "Giao tiếp nhóm hiệu quả." },
    { number: 90, name: "Documentation", description: "Tài liệu thiết kế." },
    { number: 91, name: "Playtesting", description: "Kiểm thử thực tế." },
    { number: 92, name: "Technology", description: "Công nghệ phù hợp." },
    { number: 93, name: "Crystal Ball", description: "Dự đoán tương lai." },
    { number: 94, name: "Client", description: "Hiểu khách hàng." },
    { number: 95, name: "Pitch", description: "Trình bày ý tưởng." },
    { number: 96, name: "Profit", description: "Tính khả thi thương mại." },
    { number: 97, name: "Transformation", description: "Game thay đổi người chơi." },
    { number: 98, name: "Responsibility", description: "Trách nhiệm của nhà thiết kế." },
    { number: 99, name: "Raven", description: "Sống với những gì quan trọng." },
    { number: 100, name: "Secret Purpose", description: "Mục đích sâu xa của bạn." }
];

// --- Mục lục 33 chương (từ file PDF) và tóm tắt ---
const chapters = [
    { number: 1, title: "In the Beginning, There Is the Designer", summary: "Giới thiệu về nhà thiết kế game: kỹ năng cần có, tầm quan trọng của lắng nghe, và bí mật của người có năng khiếu – đó là tình yêu với công việc." },
    { number: 2, title: "The Designer Creates an Experience", summary: "Game không phải là trải nghiệm, mà là phương tiện tạo ra trải nghiệm. Làm thế nào để nắm bắt và thiết kế trải nghiệm cốt lõi." },
    { number: 3, title: "The Experience Rises Out of a Game", summary: "Định nghĩa game: 'hoạt động giải quyết vấn đề với thái độ vui chơi'. Phân biệt game, đồ chơi, và các yếu tố cấu thành." },
    { number: 4, title: "The Game Consists of Elements", summary: "Bốn yếu tố cơ bản: Cơ chế, Câu chuyện, Thẩm mỹ và Công nghệ. Chúng phải hài hòa, hỗ trợ lẫn nhau." },
    { number: 5, title: "The Elements Support a Theme", summary: "Chủ đề thống nhất giúp game mạnh mẽ hơn. Cách xây dựng chủ đề cộng hưởng (resonant theme) và sử dụng nó để dẫn dắt thiết kế." },
    { number: 6, title: "The Game Begins with an Idea", summary: "Kỹ thuật brainstorm, khai thác tiềm thức, ghi chép ý tưởng. Tầm quan trọng của giấc ngủ và sự kiên nhẫn." },
    { number: 7, title: "The Game Improves Through Iteration", summary: "Vòng lặp thiết kế: ý tưởng → thử nghiệm → điều chỉnh. Spiral model, prototyping, và 8 bộ lọc để đánh giá." },
    { number: 8, title: "The Game is Made for a Player", summary: "Hiểu đối tượng người chơi qua nhân khẩu học, tâm lý học. Sự khác biệt giữa nam và nữ, các kiểu người chơi (Bartle)." },
    { number: 9, title: "The Experience is in the Player's Mind", summary: "Cách não bộ mô hình hóa thế giới, trạng thái flow, nhu cầu cơ bản của con người, và sự phán xét." },
    { number: 10, title: "Some Elements are Game Mechanics", summary: "Sáu cơ chế cốt lõi: không gian, đối tượng/trạng thái, hành động, luật chơi, kỹ năng, may rủi." },
    { number: 11, title: "Game Mechanics Must be in Balance", summary: "12 kiểu cân bằng thường gặp: công bằng, thử thách, lựa chọn có ý nghĩa, rủi ro/phần thưởng, kỹ năng/may mắn, v.v." },
    { number: 12, title: "Game Mechanics Support Puzzles", summary: "Nguyên tắc thiết kế câu đố: mục tiêu rõ ràng, dễ bắt đầu, cảm giác tiến triển, độ khó tăng dần, gợi ý." },
    { number: 13, title: "Players Play Games Through an Interface", summary: "Phân tích luồng tương tác, kênh thông tin, feedback, chế độ giao diện và các mẹo thiết kế UI/UX." },
    { number: 14, title: "Experiences Can be Judged by Their Interest Curves", summary: "Đường cong hứng thú: hook, xây dựng, cao trào, kết thúc. Ứng dụng fractal cho game dài." },
    { number: 15, title: "One Kind of Experience Is the Story", summary: "Sự kết hợp giữa story và gameplay. Các mô hình: string of pearls, story machine. Những thách thức của kể chuyện tương tác." },
    { number: 16, title: "Story and Game Structures Can be Artfully Merged with Indirect Control", summary: "Điều khiển gián tiếp qua ràng buộc, mục tiêu, giao diện, hình ảnh, nhân vật, âm nhạc. Collusion – NPC hợp tác với designer." },
    { number: 17, title: "Stories and Games Take Place in Worlds", summary: "Thế giới xuyên phương tiện (transmedia worlds), sức mạnh của Pokemon, đặc điểm của thế giới thành công." },
    { number: 18, title: "Worlds Contain Characters", summary: "Avatar, xây dựng nhân vật hấp dẫn: chức năng, đặc điểm, mạng lưới quan hệ, địa vị, sự thay đổi, tránh uncanny valley." },
    { number: 19, title: "Worlds Contain Spaces", summary: "Nguyên tắc kiến trúc cho game, các kiểu tổ chức không gian, bản đồ, và bài học từ Christopher Alexander." },
    { number: 20, title: "The Look and Feel of a World Is Defined by Its Aesthetics", summary: "Tầm quan trọng của hình ảnh, âm thanh, cách sử dụng concept art, và cân bằng giữa nghệ thuật và công nghệ." },
    { number: 21, title: "Some Games are Played with Other Players", summary: "Tại sao con người thích chơi cùng nhau: cạnh tranh, hợp tác, gặp gỡ, khám phá bản thân và người khác." },
    { number: 22, title: "Other Players Sometimes Form Communities", summary: "Xây dựng cộng đồng mạnh: tình bạn, xung đột, kiến trúc, tài sản chung, biểu đạt, ba cấp độ người chơi, quản lý cộng đồng." },
    { number: 23, title: "The Designer Usually Works with a Team", summary: "Bí quyết làm việc nhóm: tình yêu với dự án, giao tiếp khách quan, tôn trọng, tin tưởng, trung thực và thống nhất." },
    { number: 24, title: "The Team Sometimes Communicates Through Documents", summary: "Các loại tài liệu: overview, detailed design, story bible, technical design, art bible, schedule, v.v. Mục đích chính là ghi nhớ và truyền thông." },
    { number: 25, title: "Good Games Are Created Through Playtesting", summary: "Phương pháp playtesting: xác định mục tiêu, chọn đối tượng, địa điểm, dữ liệu thu thập, phỏng vấn, và vượt qua nỗi sợ." },
    { number: 26, title: "The Team Builds a Game with Technology", summary: "Công nghệ nền tảng và trang trí, chu kỳ hype, innovator's dilemma, dự đoán tương lai công nghệ." },
    { number: 27, title: "Your Game Will Probably Have a Client", summary: "Đối phó với ý kiến khách hàng, hiểu ba tầng mong muốn (lời nói – suy nghĩ – trái tim), câu chuyện Michelangelo và pho tượng David." },
    { number: 28, title: "The Designer Gives the Client a Pitch", summary: "12 lời khuyên cho một buổi pitch thành công: tạo ấn tượng, chuẩn bị kỹ, thể hiện đam mê, hiểu đối phương, luyện tập, v.v." },
    { number: 29, title: "The Designer and Client Want the Game to Make a Profit", summary: "Hiểu mô hình kinh doanh, các chỉ số tài chính, hòa vốn, và ngôn ngữ của ngành." },
    { number: 30, title: "Games Transform Their Players", summary: "Game có thể tốt (cảm xúc, kết nối, giáo dục, rèn luyện) và cũng có thể gây hại (bạo lực, nghiện)." },
    { number: 31, title: "Designers Have Certain Responsibilities", summary: "Trách nhiệm đạo đức của nhà thiết kế, nguy cơ bị lãng quên, và tầm quan trọng của việc tạo ra những thay đổi tích cực." },
    { number: 32, title: "Each Designer has a Motivation", summary: "Lắng nghe bản thân, tìm ra mục đích sâu xa. Lens #99: The Raven, Lens #100: Your Secret Purpose." },
    { number: 33, title: "Goodbye", summary: "Lời kết: hãy sử dụng các lens, giữ chiếc nhẫn vô hình, và tiếp tục hành trình thiết kế game." }
];

// --- Trích dẫn nổi bật (lấy từ PDF) ---
const quotes = [
    { en: "The most important skill for a game designer is listening.", vi: "Kỹ năng quan trọng nhất của nhà thiết kế game là lắng nghe." },
    { en: "The game is not the experience. The game enables the experience.", vi: "Game không phải là trải nghiệm. Game là phương tiện tạo ra trải nghiệm." },
    { en: "A game is a problem-solving activity, approached with a playful attitude.", vi: "Game là hoạt động giải quyết vấn đề, tiếp cận với thái độ vui chơi." },
    { en: "Your first ten games will suck — so get them out of the way fast.", vi: "Mười game đầu tiên của bạn sẽ tệ — hãy làm chúng thật nhanh." },
    { en: "If you aren't failing, you aren't trying hard enough.", vi: "Nếu bạn không thất bại, bạn chưa cố gắng đủ." },
    { en: "The secret to successful teamwork is love.", vi: "Bí mật của làm việc nhóm thành công là tình yêu." },
    { en: "Play is manipulation that indulges curiosity.", vi: "Chơi là sự thao tác thỏa mãn trí tò mò." },
    { en: "Good game design happens when you view your game from as many perspectives as possible.", vi: "Thiết kế game tốt xảy ra khi bạn nhìn game từ nhiều góc nhìn nhất có thể." },
    { en: "The designer's ultimate goal is to deliver an experience.", vi: "Mục tiêu cuối cùng của nhà thiết kế là tạo ra trải nghiệm." },
    { en: "Balance is not a science; it is an art.", vi: "Cân bằng không phải khoa học; nó là nghệ thuật." },
    { en: "The only reality we can know is the reality of experience.", vi: "Thực tại duy nhất chúng ta biết là thực tại của trải nghiệm." },
    { en: "A game with no goal is just a toy.", vi: "Game không có mục tiêu chỉ là một món đồ chơi." },
    { en: "You must learn to listen to your players, thoroughly and deeply.", vi: "Bạn phải học cách lắng nghe người chơi, thấu đáo và sâu sắc." },
    { en: "The more you record your ideas, the freer your mind becomes.", vi: "Bạn càng ghi lại ý tưởng, tâm trí càng tự do." }
];
const formulasExamples = [
    {
        title: "Định nghĩa game (Chương 3)",
        content: "A game is a problem-solving activity, approached with a playful attitude.",
        translation: "Game là hoạt động giải quyết vấn đề, tiếp cận với thái độ vui chơi.",
        note: "Đây là công thức nền tảng: mọi game đều là bài toán cần giải, nhưng phải có tinh thần vui vẻ."
    },
    {
        title: "The Rule of the Loop (Chương 7)",
        content: "The more times you test and improve your design, the better your game will be.",
        translation: "Bạn càng kiểm tra và cải tiến thiết kế nhiều lần, game của bạn càng tốt.",
        note: "Không có ngoại lệ. Mọi game đều cần vòng lặp cải tiến."
    },
    {
        title: "Elegance in Pac-Man (Chương 11)",
        content: "The dots in Pac-Man serve five purposes: short-term goal, long-term goal, slow the player, give points, earn extra lives.",
        translation: "Các chấm trong Pac-Man phục vụ năm mục đích: mục tiêu ngắn hạn, mục tiêu dài hạn, làm chậm người chơi, cho điểm, kiếm mạng thêm.",
        note: "Một yếu tố đơn giản nhưng có nhiều chức năng – đó là sự thanh lịch (elegance)."
    },
    {
        title: "Indirect Control – The Red Line (Chương 16)",
        content: "In Aladdin's Magic Carpet, a simple red line on the floor made 90% of players fly to the Sultan instead of exploring freely. They didn't even remember the line.",
        translation: "Trong Aladdin's Magic Carpet, một đường kẻ đỏ đơn giản trên sàn khiến 90% người chơi bay đến Sultan thay vì khám phá tự do. Họ thậm chí không nhớ đường kẻ đó.",
        note: "Sức mạnh của điều khiển gián tiếp – thiết kế có thể dẫn dắt hành vi mà người chơi không hề hay biết."
    },
    {
        title: "Triangularity – Risk vs Reward (Chương 11)",
        content: "Give players a choice: low risk for low reward, or high risk for high reward. This is the key to exciting gameplay.",
        translation: "Cho người chơi lựa chọn: rủi ro thấp cho phần thưởng thấp, hoặc rủi ro cao cho phần thưởng cao. Đây là chìa khóa của gameplay hấp dẫn.",
        note: "Ví dụ: UFO trong Space Invaders – khó bắn nhưng cho nhiều điểm."
    },
    {
        title: "The Secret of Gifted Designers (Chương 1)",
        content: "There are two kinds of gifts. The minor gift is innate talent. The major gift is love of the work. Love will make your skills grow beyond any natural talent.",
        translation: "Có hai loại năng khiếu. Năng khiếu nhỏ là tài năng bẩm sinh. Năng khiếu lớn là tình yêu với công việc. Tình yêu sẽ khiến kỹ năng của bạn phát triển vượt xa bất kỳ tài năng tự nhiên nào.",
        note: "Bí mật của những nhà thiết kế vĩ đại: họ yêu công việc."
    },
    {
        title: "Playtesting Reality (Chương 25)",
        content: "I hate playtesting. I'm afraid that people won't like my game. But playtesting is the only way to make your game better.",
        translation: "Tôi ghét playtesting. Tôi sợ mọi người không thích game của mình. Nhưng playtesting là cách duy nhất để làm game tốt hơn.",
        note: "Jesse thừa nhận nỗi sợ, nhưng nhấn mạnh tầm quan trọng của kiểm thử."
    }
];

function renderFormulasExamples() {
    const container = document.getElementById('formulasExamples');
    if (!container) return;
    container.innerHTML = formulasExamples.map(ex => `
        <div class="formula-card">
            <div class="formula-title">${ex.title}</div>
            <div class="formula-quote">“${ex.content}”</div>
            <div class="formula-translation">${ex.translation}</div>
            <div class="formula-note"><i class="fas fa-lightbulb"></i> ${ex.note}</div>
        </div>
    `).join('');
}
// --- Hàm render các Lens (grid) ---
function renderLenses() {
    const container = document.getElementById('lensesGrid');
    if (!container) return;
    container.innerHTML = lensesData.map(lens => `
        <div class="lens-card" data-lens-number="${lens.number}">
            <div class="lens-number">#${lens.number}</div>
            <div class="lens-name">${lens.name}</div>
            <div class="lens-desc">${lens.description}</div>
        </div>
    `).join('');
}

// --- Hàm render mục lục dạng accordion ---
function renderChaptersAccordion() {
    const container = document.getElementById('chaptersAccordion');
    if (!container) return;
    container.innerHTML = chapters.map(ch => `
        <div class="chapter-item">
            <div class="chapter-header" data-chapter="${ch.number}">
                <i class="fas fa-chevron-right"></i>
                <span class="chapter-number">Chương ${ch.number}</span>
                <span class="chapter-title">${ch.title}</span>
            </div>
            <div class="chapter-summary" id="chapter-summary-${ch.number}" style="display: none;">
                <p>${ch.summary}</p>
            </div>
        </div>
    `).join('');

    // Gắn sự kiện click cho từng header
    document.querySelectorAll('.chapter-header').forEach(header => {
        header.addEventListener('click', () => {
            const chNum = header.dataset.chapter;
            const summaryDiv = document.getElementById(`chapter-summary-${chNum}`);
            const icon = header.querySelector('i');
            if (summaryDiv.style.display === 'none') {
                summaryDiv.style.display = 'block';
                icon.classList.remove('fa-chevron-right');
                icon.classList.add('fa-chevron-down');
            } else {
                summaryDiv.style.display = 'none';
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-right');
            }
        });
    });
}

// --- Hàm render trích dẫn ---
function renderQuotes() {
    const container = document.getElementById('quotesList');
    if (!container) return;
    container.innerHTML = quotes.map(q => `
        <div class="quote-item">
            <i class="fas fa-quote-left"></i> ${q.en}
            <div class="quote-vi">${q.vi}</div>
        </div>
    `).join('');
}

// --- Xử lý tải PDF (demo) ---
function setupDownload() {
    const btn = document.getElementById('downloadPdfBtn');
    if (btn) {
        btn.addEventListener('click', () => {
            alert('Bạn có thể tìm đọc bản đầy đủ "The Art of Game Design" của Jesse Schell. Đây là tài liệu kinh điển về thiết kế game.');
        });
    }
}

// --- Khởi tạo toàn bộ tab Sách ---
function initBookTab() {
    renderLenses();
    renderChaptersAccordion();
    renderQuotes();
    renderFormulasExamples();  // Thêm dòng này
    setupDownload();
}

// Để main.js có thể gọi
if (typeof window !== 'undefined') {
    window.initBookTab = initBookTab;
}